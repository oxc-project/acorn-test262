__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "oct1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "Literal",
            "value": 19230,
            "raw": "0o45436",
            "start": 11,
            "end": 18
          },
          "definite": false,
          "start": 4,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "oct2",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 28
          },
          "init": {
            "type": "Literal",
            "value": 19230,
            "raw": "0O45436",
            "start": 31,
            "end": 38
          },
          "definite": false,
          "start": 24,
          "end": 38
        }
      ],
      "declare": false,
      "start": 20,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "oct3",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 48
          },
          "init": {
            "type": "Literal",
            "value": 1e+400,
            "raw": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
            "start": 51,
            "end": 627
          },
          "definite": false,
          "start": 44,
          "end": 627
        }
      ],
      "declare": false,
      "start": 40,
      "end": 628
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "oct4",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 637
          },
          "init": {
            "type": "Literal",
            "value": 5.462437423415177e+244,
            "raw": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
            "start": 640,
            "end": 913
          },
          "definite": false,
          "start": 633,
          "end": 913
        }
      ],
      "declare": false,
      "start": 629,
      "end": 914
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 920,
            "end": 924
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 19230,
                  "raw": "0o45436",
                  "start": 933,
                  "end": 940
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello",
                  "raw": "\"Hello\"",
                  "start": 942,
                  "end": 949
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 933,
                "end": 949
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 955,
                  "end": 956
                },
                "value": {
                  "type": "Literal",
                  "value": 19230,
                  "raw": "0o45436",
                  "start": 958,
                  "end": 965
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 955,
                "end": 965
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 973
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oct1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 975,
                  "end": 979
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 972,
                "end": 979
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oct1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 985,
                  "end": 989
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oct1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 985,
                  "end": 989
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 985,
                "end": 989
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1e+400,
                  "raw": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
                  "start": 995,
                  "end": 1571
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1573,
                  "end": 1577
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 995,
                "end": 1577
              }
            ],
            "start": 927,
            "end": 1579
          },
          "definite": false,
          "start": 920,
          "end": 1579
        }
      ],
      "declare": false,
      "start": 916,
      "end": 1579
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1585,
            "end": 1589
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 19230,
                  "raw": "0O45436",
                  "start": 1598,
                  "end": 1605
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1607,
                  "end": 1611
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1598,
                "end": 1611
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1617,
                  "end": 1618
                },
                "value": {
                  "type": "Literal",
                  "value": 19230,
                  "raw": "0O45436",
                  "start": 1620,
                  "end": 1627
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1617,
                "end": 1627
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1634,
                  "end": 1635
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oct2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1637,
                  "end": 1641
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1634,
                "end": 1641
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oct2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1647,
                  "end": 1651
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oct2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1647,
                  "end": 1651
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1647,
                "end": 1651
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 5.462437423415177e+244,
                  "raw": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
                  "start": 1657,
                  "end": 1930
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1932,
                  "end": 1937
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1657,
                "end": 1937
              }
            ],
            "start": 1592,
            "end": 1940
          },
          "definite": false,
          "start": 1585,
          "end": 1940
        }
      ],
      "declare": false,
      "start": 1581,
      "end": 1940
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1942,
          "end": 1946
        },
        "property": {
          "type": "Literal",
          "value": 19230,
          "raw": "0o45436",
          "start": 1947,
          "end": 1954
        },
        "optional": false,
        "computed": true,
        "start": 1942,
        "end": 1955
      },
      "directive": null,
      "start": 1942,
      "end": 1956
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1971,
          "end": 1975
        },
        "property": {
          "type": "Literal",
          "value": "0o45436",
          "raw": "\"0o45436\"",
          "start": 1976,
          "end": 1985
        },
        "optional": false,
        "computed": true,
        "start": 1971,
        "end": 1986
      },
      "directive": null,
      "start": 1971,
      "end": 1987
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1997,
          "end": 2001
        },
        "property": {
          "type": "Literal",
          "value": "19230",
          "raw": "\"19230\"",
          "start": 2002,
          "end": 2009
        },
        "optional": false,
        "computed": true,
        "start": 1997,
        "end": 2010
      },
      "directive": null,
      "start": 1997,
      "end": 2011
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2026,
          "end": 2030
        },
        "property": {
          "type": "Literal",
          "value": 19230,
          "raw": "19230",
          "start": 2031,
          "end": 2036
        },
        "optional": false,
        "computed": true,
        "start": 2026,
        "end": 2037
      },
      "directive": null,
      "start": 2026,
      "end": 2038
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2055,
          "end": 2059
        },
        "property": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 2060,
          "end": 2063
        },
        "optional": false,
        "computed": true,
        "start": 2055,
        "end": 2064
      },
      "directive": null,
      "start": 2055,
      "end": 2065
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2084,
          "end": 2088
        },
        "property": {
          "type": "Literal",
          "value": "b",
          "raw": "\"b\"",
          "start": 2089,
          "end": 2092
        },
        "optional": false,
        "computed": true,
        "start": 2084,
        "end": 2093
      },
      "directive": null,
      "start": 2084,
      "end": 2094
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2113,
          "end": 2117
        },
        "property": {
          "type": "Literal",
          "value": "oct1",
          "raw": "\"oct1\"",
          "start": 2118,
          "end": 2124
        },
        "optional": false,
        "computed": true,
        "start": 2113,
        "end": 2125
      },
      "directive": null,
      "start": 2113,
      "end": 2126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2142,
          "end": 2146
        },
        "property": {
          "type": "Literal",
          "value": "Infinity",
          "raw": "\"Infinity\"",
          "start": 2147,
          "end": 2157
        },
        "optional": false,
        "computed": true,
        "start": 2142,
        "end": 2158
      },
      "directive": null,
      "start": 2142,
      "end": 2159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2173,
          "end": 2177
        },
        "property": {
          "type": "Literal",
          "value": 19230,
          "raw": "0O45436",
          "start": 2178,
          "end": 2185
        },
        "optional": false,
        "computed": true,
        "start": 2173,
        "end": 2186
      },
      "directive": null,
      "start": 2173,
      "end": 2187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2201,
          "end": 2205
        },
        "property": {
          "type": "Literal",
          "value": "0O45436",
          "raw": "\"0O45436\"",
          "start": 2206,
          "end": 2215
        },
        "optional": false,
        "computed": true,
        "start": 2201,
        "end": 2216
      },
      "directive": null,
      "start": 2201,
      "end": 2217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2226,
          "end": 2230
        },
        "property": {
          "type": "Literal",
          "value": "19230",
          "raw": "\"19230\"",
          "start": 2231,
          "end": 2238
        },
        "optional": false,
        "computed": true,
        "start": 2226,
        "end": 2239
      },
      "directive": null,
      "start": 2226,
      "end": 2240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2254,
          "end": 2258
        },
        "property": {
          "type": "Literal",
          "value": 19230,
          "raw": "19230",
          "start": 2259,
          "end": 2264
        },
        "optional": false,
        "computed": true,
        "start": 2254,
        "end": 2265
      },
      "directive": null,
      "start": 2254,
      "end": 2266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2282,
          "end": 2286
        },
        "property": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 2287,
          "end": 2290
        },
        "optional": false,
        "computed": true,
        "start": 2282,
        "end": 2291
      },
      "directive": null,
      "start": 2282,
      "end": 2292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2310,
          "end": 2314
        },
        "property": {
          "type": "Literal",
          "value": "b",
          "raw": "\"b\"",
          "start": 2315,
          "end": 2318
        },
        "optional": false,
        "computed": true,
        "start": 2310,
        "end": 2319
      },
      "directive": null,
      "start": 2310,
      "end": 2320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2338,
          "end": 2342
        },
        "property": {
          "type": "Literal",
          "value": "oct2",
          "raw": "\"oct2\"",
          "start": 2343,
          "end": 2349
        },
        "optional": false,
        "computed": true,
        "start": 2338,
        "end": 2350
      },
      "directive": null,
      "start": 2338,
      "end": 2351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2366,
          "end": 2370
        },
        "property": {
          "type": "Literal",
          "value": 5.462437423415177e+244,
          "raw": "5.462437423415177e+244",
          "start": 2371,
          "end": 2393
        },
        "optional": false,
        "computed": true,
        "start": 2366,
        "end": 2394
      },
      "directive": null,
      "start": 2366,
      "end": 2395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2410,
          "end": 2414
        },
        "property": {
          "type": "Literal",
          "value": "5.462437423415177e+244",
          "raw": "\"5.462437423415177e+244\"",
          "start": 2415,
          "end": 2439
        },
        "optional": false,
        "computed": true,
        "start": 2410,
        "end": 2440
      },
      "directive": null,
      "start": 2410,
      "end": 2441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2454,
          "end": 2458
        },
        "property": {
          "type": "Literal",
          "value": "Infinity",
          "raw": "\"Infinity\"",
          "start": 2459,
          "end": 2469
        },
        "optional": false,
        "computed": true,
        "start": 2454,
        "end": 2470
      },
      "directive": null,
      "start": 2454,
      "end": 2471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2479
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "oct1",
    "start": 4,
    "end": 8,
    "range": [
      4,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Numeric",
    "value": "0o45436",
    "start": 11,
    "end": 18,
    "range": [
      11,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 20,
    "end": 23,
    "range": [
      20,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "oct2",
    "start": 24,
    "end": 28,
    "range": [
      24,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Numeric",
    "value": "0O45436",
    "start": 31,
    "end": 38,
    "range": [
      31,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 40,
    "end": 43,
    "range": [
      40,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "oct3",
    "start": 44,
    "end": 48,
    "range": [
      44,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Numeric",
    "value": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
    "start": 51,
    "end": 627,
    "range": [
      51,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 629,
    "end": 632,
    "range": [
      629,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "oct4",
    "start": 633,
    "end": 637,
    "range": [
      633,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Numeric",
    "value": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
    "start": 640,
    "end": 913,
    "range": [
      640,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 916,
    "end": 919,
    "range": [
      916,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 920,
    "end": 924,
    "range": [
      920,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Numeric",
    "value": "0o45436",
    "start": 933,
    "end": 940,
    "range": [
      933,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 942,
    "end": 949,
    "range": [
      942,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Numeric",
    "value": "0o45436",
    "start": 958,
    "end": 965,
    "range": [
      958,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "oct1",
    "start": 975,
    "end": 979,
    "range": [
      975,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "oct1",
    "start": 985,
    "end": 989,
    "range": [
      985,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Numeric",
    "value": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
    "start": 995,
    "end": 1571,
    "range": [
      995,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1573,
    "end": 1577,
    "range": [
      1573,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1581,
    "end": 1584,
    "range": [
      1581,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 1585,
    "end": 1589,
    "range": [
      1585,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Numeric",
    "value": "0O45436",
    "start": 1598,
    "end": 1605,
    "range": [
      1598,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1607,
    "end": 1611,
    "range": [
      1607,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Numeric",
    "value": "0O45436",
    "start": 1620,
    "end": 1627,
    "range": [
      1620,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Identifier",
    "value": "oct2",
    "start": 1637,
    "end": 1641,
    "range": [
      1637,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "oct2",
    "start": 1647,
    "end": 1651,
    "range": [
      1647,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Numeric",
    "value": "0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777",
    "start": 1657,
    "end": 1930,
    "range": [
      1657,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1932,
    "end": 1937,
    "range": [
      1932,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1942,
    "end": 1946,
    "range": [
      1942,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Numeric",
    "value": "0o45436",
    "start": 1947,
    "end": 1954,
    "range": [
      1947,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1971,
    "end": 1975,
    "range": [
      1971,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "String",
    "value": "\"0o45436\"",
    "start": 1976,
    "end": 1985,
    "range": [
      1976,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1997,
    "end": 2001,
    "range": [
      1997,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "String",
    "value": "\"19230\"",
    "start": 2002,
    "end": 2009,
    "range": [
      2002,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2026,
    "end": 2030,
    "range": [
      2026,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Numeric",
    "value": "19230",
    "start": 2031,
    "end": 2036,
    "range": [
      2031,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2055,
    "end": 2059,
    "range": [
      2055,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2060,
    "end": 2063,
    "range": [
      2060,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2084,
    "end": 2088,
    "range": [
      2084,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2089,
    "end": 2092,
    "range": [
      2089,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2113,
    "end": 2117,
    "range": [
      2113,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "String",
    "value": "\"oct1\"",
    "start": 2118,
    "end": 2124,
    "range": [
      2118,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2142,
    "end": 2146,
    "range": [
      2142,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "String",
    "value": "\"Infinity\"",
    "start": 2147,
    "end": 2157,
    "range": [
      2147,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2173,
    "end": 2177,
    "range": [
      2173,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Numeric",
    "value": "0O45436",
    "start": 2178,
    "end": 2185,
    "range": [
      2178,
      2185
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2201,
    "end": 2205,
    "range": [
      2201,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "String",
    "value": "\"0O45436\"",
    "start": 2206,
    "end": 2215,
    "range": [
      2206,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2226,
    "end": 2230,
    "range": [
      2226,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "String",
    "value": "\"19230\"",
    "start": 2231,
    "end": 2238,
    "range": [
      2231,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2254,
    "end": 2258,
    "range": [
      2254,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Numeric",
    "value": "19230",
    "start": 2259,
    "end": 2264,
    "range": [
      2259,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2282,
    "end": 2286,
    "range": [
      2282,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2287,
    "end": 2290,
    "range": [
      2287,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2310,
    "end": 2314,
    "range": [
      2310,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2315,
    "end": 2318,
    "range": [
      2315,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2338,
    "end": 2342,
    "range": [
      2338,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "String",
    "value": "\"oct2\"",
    "start": 2343,
    "end": 2349,
    "range": [
      2343,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2366,
    "end": 2370,
    "range": [
      2366,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Numeric",
    "value": "5.462437423415177e+244",
    "start": 2371,
    "end": 2393,
    "range": [
      2371,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2410,
    "end": 2414,
    "range": [
      2410,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "String",
    "value": "\"5.462437423415177e+244\"",
    "start": 2415,
    "end": 2439,
    "range": [
      2415,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2454,
    "end": 2458,
    "range": [
      2454,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2458,
    "end": 2459,
    "range": [
      2458,
      2459
    ]
  },
  {
    "type": "String",
    "value": "\"Infinity\"",
    "start": 2459,
    "end": 2469,
    "range": [
      2459,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  }
]
```
