derivedClassTransitivity4.ts
```json
{
  "type": "Program",
  "start": 123,
  "end": 402,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 167,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 131,
        "end": 167,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 165,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 165,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 165,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 151,
                  "end": 160,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 154,
                      "end": 160
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 169,
      "end": 239,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 187,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 212,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 212,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 212,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 176,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 185,
        "end": 186,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 326,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 326,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 291,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 275,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 291,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 291,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 276,
                  "end": 286,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 278,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 336,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 335,
                "end": 336,
                "typeName": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 346,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 345,
                "end": 346,
                "typeName": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 356,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 356,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 355,
                "end": 356,
                "typeName": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 358,
      "end": 364,
      "expression": {
        "type": "AssignmentExpression",
        "start": 358,
        "end": 363,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 358,
          "end": 359,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 362,
          "end": 363,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 370,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 373,
            "end": 381,
            "arguments": [
              {
                "type": "Literal",
                "start": 379,
                "end": 380,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 373,
              "end": 378,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 375,
                "end": 378,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 401,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 392,
            "end": 401,
            "arguments": [
              {
                "type": "Literal",
                "start": 398,
                "end": 400,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 392,
              "end": 397,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 394,
                "end": 397,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
