__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 222,
  "end": 693,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 267,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 230,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 257,
            "end": 265,
            "properties": [
              {
                "type": "Property",
                "start": 259,
                "end": 263,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 262,
                  "end": 263,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 319,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 303,
            "end": 317,
            "properties": [
              {
                "type": "Property",
                "start": 305,
                "end": 309,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 306,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 308,
                  "end": 309,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 311,
                "end": 315,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 314,
                  "end": 315,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 359,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 355,
            "end": 357,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 426,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 387,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 414,
            "end": 424,
            "properties": [
              {
                "type": "Property",
                "start": 416,
                "end": 422,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 417,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 419,
                  "end": 422,
                  "value": "a",
                  "raw": "\"a\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 465,
      "end": 522,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 473,
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 499,
            "end": 520,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 506,
              "end": 520,
              "callee": {
                "type": "MemberExpression",
                "start": 506,
                "end": 517,
                "object": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 517,
                  "decorators": [],
                  "name": "substring",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 518,
                  "end": 519,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 580,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 579,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 531,
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 572,
            "end": 578,
            "elements": [
              {
                "type": "Literal",
                "start": 573,
                "end": 574,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 576,
                "end": 577,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 581,
      "end": 631,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 589,
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 616,
            "end": 629,
            "properties": [
              {
                "type": "Property",
                "start": 618,
                "end": 627,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 619,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 621,
                  "end": 627,
                  "value": "test",
                  "raw": "'test'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 693,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 692,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 640,
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 667,
            "end": 691,
            "properties": [
              {
                "type": "Property",
                "start": 669,
                "end": 678,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 672,
                  "end": 678,
                  "value": "test",
                  "raw": "'test'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 680,
                "end": 689,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 681,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 683,
                  "end": 689,
                  "value": "test",
                  "raw": "'test'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
