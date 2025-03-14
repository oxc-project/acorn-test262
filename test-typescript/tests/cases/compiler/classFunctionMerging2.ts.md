classFunctionMerging2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 71,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 71,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 54,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 42,
              "end": 54,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 59,
            "end": 69,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 73,
      "end": 106,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 92,
          "end": 101,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 101,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 95,
              "end": 101
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 105,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 104,
          "end": 105,
          "typeName": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 179,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 162,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 150,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 150,
              "end": 162,
              "async": false,
              "body": null,
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 154,
                      "end": 160
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 177,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 189,
            "end": 201,
            "arguments": [
              {
                "type": "Literal",
                "start": 195,
                "end": 200,
                "raw": "\"Hey\"",
                "value": "Hey"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 218,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 214,
            "end": 217,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 213,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 209,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 210,
            "end": 213,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
