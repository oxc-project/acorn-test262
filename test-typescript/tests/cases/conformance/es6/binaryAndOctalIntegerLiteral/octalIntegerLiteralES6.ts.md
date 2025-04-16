__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 2496,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 25,
            "name": "oct1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 28,
            "end": 35,
            "value": 19230,
            "raw": "0o45436"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "name": "oct2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 48,
            "end": 55,
            "value": 19230,
            "raw": "0O45436"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 644,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "name": "oct3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 68,
            "end": 644,
            "value": 1e+400,
            "raw": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 646,
      "end": 931,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 650,
          "end": 930,
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 654,
            "name": "oct4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 657,
            "end": 930,
            "value": 5.462437423415177e+244,
            "raw": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 933,
      "end": 1596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 937,
          "end": 1596,
          "id": {
            "type": "Identifier",
            "start": 937,
            "end": 941,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 944,
            "end": 1596,
            "properties": [
              {
                "type": "Property",
                "start": 950,
                "end": 966,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 950,
                  "end": 957,
                  "value": 19230,
                  "raw": "0o45436"
                },
                "value": {
                  "type": "Literal",
                  "start": 959,
                  "end": 966,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 972,
                "end": 982,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 972,
                  "end": 973,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 975,
                  "end": 982,
                  "value": 19230,
                  "raw": "0o45436"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 989,
                "end": 996,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 989,
                  "end": 990,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 992,
                  "end": 996,
                  "name": "oct1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1002,
                "end": 1006,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1002,
                  "end": 1006,
                  "name": "oct1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1002,
                  "end": 1006,
                  "name": "oct1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1012,
                "end": 1594,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1012,
                  "end": 1588,
                  "value": 1e+400,
                  "raw": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777"
                },
                "value": {
                  "type": "Literal",
                  "start": 1590,
                  "end": 1594,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1598,
      "end": 1957,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1602,
          "end": 1957,
          "id": {
            "type": "Identifier",
            "start": 1602,
            "end": 1606,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1609,
            "end": 1957,
            "properties": [
              {
                "type": "Property",
                "start": 1615,
                "end": 1628,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1615,
                  "end": 1622,
                  "value": 19230,
                  "raw": "0O45436"
                },
                "value": {
                  "type": "Literal",
                  "start": 1624,
                  "end": 1628,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1634,
                "end": 1644,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1634,
                  "end": 1635,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1637,
                  "end": 1644,
                  "value": 19230,
                  "raw": "0O45436"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1651,
                "end": 1658,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1652,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1654,
                  "end": 1658,
                  "name": "oct2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1664,
                "end": 1668,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1668,
                  "name": "oct2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1668,
                  "name": "oct2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1674,
                "end": 1954,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1674,
                  "end": 1947,
                  "value": 5.462437423415177e+244,
                  "raw": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777"
                },
                "value": {
                  "type": "Literal",
                  "start": 1949,
                  "end": 1954,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1959,
      "end": 1973,
      "expression": {
        "type": "MemberExpression",
        "start": 1959,
        "end": 1972,
        "object": {
          "type": "Identifier",
          "start": 1959,
          "end": 1963,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 1964,
          "end": 1971,
          "value": 19230,
          "raw": "0o45436"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1988,
      "end": 2004,
      "expression": {
        "type": "MemberExpression",
        "start": 1988,
        "end": 2003,
        "object": {
          "type": "Identifier",
          "start": 1988,
          "end": 1992,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 1993,
          "end": 2002,
          "value": "0o45436",
          "raw": "\"0o45436\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2014,
      "end": 2028,
      "expression": {
        "type": "MemberExpression",
        "start": 2014,
        "end": 2027,
        "object": {
          "type": "Identifier",
          "start": 2014,
          "end": 2018,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2019,
          "end": 2026,
          "value": "19230",
          "raw": "\"19230\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2043,
      "end": 2055,
      "expression": {
        "type": "MemberExpression",
        "start": 2043,
        "end": 2054,
        "object": {
          "type": "Identifier",
          "start": 2043,
          "end": 2047,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2048,
          "end": 2053,
          "value": 19230,
          "raw": "19230"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2072,
      "end": 2082,
      "expression": {
        "type": "MemberExpression",
        "start": 2072,
        "end": 2081,
        "object": {
          "type": "Identifier",
          "start": 2072,
          "end": 2076,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2077,
          "end": 2080,
          "value": "a",
          "raw": "\"a\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2101,
      "end": 2111,
      "expression": {
        "type": "MemberExpression",
        "start": 2101,
        "end": 2110,
        "object": {
          "type": "Identifier",
          "start": 2101,
          "end": 2105,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2106,
          "end": 2109,
          "value": "b",
          "raw": "\"b\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2130,
      "end": 2143,
      "expression": {
        "type": "MemberExpression",
        "start": 2130,
        "end": 2142,
        "object": {
          "type": "Identifier",
          "start": 2130,
          "end": 2134,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2135,
          "end": 2141,
          "value": "oct1",
          "raw": "\"oct1\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2159,
      "end": 2176,
      "expression": {
        "type": "MemberExpression",
        "start": 2159,
        "end": 2175,
        "object": {
          "type": "Identifier",
          "start": 2159,
          "end": 2163,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2164,
          "end": 2174,
          "value": "Infinity",
          "raw": "\"Infinity\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2190,
      "end": 2204,
      "expression": {
        "type": "MemberExpression",
        "start": 2190,
        "end": 2203,
        "object": {
          "type": "Identifier",
          "start": 2190,
          "end": 2194,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2195,
          "end": 2202,
          "value": 19230,
          "raw": "0O45436"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2218,
      "end": 2234,
      "expression": {
        "type": "MemberExpression",
        "start": 2218,
        "end": 2233,
        "object": {
          "type": "Identifier",
          "start": 2218,
          "end": 2222,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2223,
          "end": 2232,
          "value": "0O45436",
          "raw": "\"0O45436\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2243,
      "end": 2257,
      "expression": {
        "type": "MemberExpression",
        "start": 2243,
        "end": 2256,
        "object": {
          "type": "Identifier",
          "start": 2243,
          "end": 2247,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2248,
          "end": 2255,
          "value": "19230",
          "raw": "\"19230\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2271,
      "end": 2283,
      "expression": {
        "type": "MemberExpression",
        "start": 2271,
        "end": 2282,
        "object": {
          "type": "Identifier",
          "start": 2271,
          "end": 2275,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2276,
          "end": 2281,
          "value": 19230,
          "raw": "19230"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2299,
      "end": 2309,
      "expression": {
        "type": "MemberExpression",
        "start": 2299,
        "end": 2308,
        "object": {
          "type": "Identifier",
          "start": 2299,
          "end": 2303,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2304,
          "end": 2307,
          "value": "a",
          "raw": "\"a\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2327,
      "end": 2337,
      "expression": {
        "type": "MemberExpression",
        "start": 2327,
        "end": 2336,
        "object": {
          "type": "Identifier",
          "start": 2327,
          "end": 2331,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2332,
          "end": 2335,
          "value": "b",
          "raw": "\"b\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2355,
      "end": 2368,
      "expression": {
        "type": "MemberExpression",
        "start": 2355,
        "end": 2367,
        "object": {
          "type": "Identifier",
          "start": 2355,
          "end": 2359,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2360,
          "end": 2366,
          "value": "oct2",
          "raw": "\"oct2\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2383,
      "end": 2412,
      "expression": {
        "type": "MemberExpression",
        "start": 2383,
        "end": 2411,
        "object": {
          "type": "Identifier",
          "start": 2383,
          "end": 2387,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2388,
          "end": 2410,
          "value": 5.462437423415177e+244,
          "raw": "5.462437423415177e+244"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2427,
      "end": 2458,
      "expression": {
        "type": "MemberExpression",
        "start": 2427,
        "end": 2457,
        "object": {
          "type": "Identifier",
          "start": 2427,
          "end": 2431,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2432,
          "end": 2456,
          "value": "5.462437423415177e+244",
          "raw": "\"5.462437423415177e+244\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2471,
      "end": 2488,
      "expression": {
        "type": "MemberExpression",
        "start": 2471,
        "end": 2487,
        "object": {
          "type": "Identifier",
          "start": 2471,
          "end": 2475,
          "name": "obj2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2476,
          "end": 2486,
          "value": "Infinity",
          "raw": "\"Infinity\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
