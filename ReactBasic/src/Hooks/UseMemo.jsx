import React, { useMemo } from 'react'

const UseMemo = () => {

    const empObj = {
        name: "Kevin",
        baseSalary: 60000,
        tax: 5000,
        bonus: 10000,
        homeAllowance: 15000,
        fuelAllowance: 5000,
    }
    // Calculate Total Salary of An employee with help of useMemo
    const grossSalary = useMemo(() => (empObj.baseSalary + empObj.bonus + empObj.homeAllowance + empObj.fuelAllowance) - empObj.tax, [empObj])

    return (
        <div>
            <p>{`${empObj.name} has Gross salary ${grossSalary}`}</p>
        </div>
    )
}

export default UseMemo