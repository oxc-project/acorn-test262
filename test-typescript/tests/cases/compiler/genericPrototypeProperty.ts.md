genericPrototypeProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 58,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 56,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
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
              "start": 30,
              "end": 56,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 56,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 42,
                    "end": 54,
                    "argument": {
                      "type": "Literal",
                      "start": 49,
                      "end": 53,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 35,
                      "typeName": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 38,
                  "end": 39,
                  "typeName": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 68,
            "end": 79,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 70,
              "end": 79,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 104,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 107,
            "end": 110,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "r",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 117,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 120,
            "end": 131,
            "arguments": [
              {
                "type": "Literal",
                "start": 126,
                "end": 130,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 120,
              "end": 125,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "r",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
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
