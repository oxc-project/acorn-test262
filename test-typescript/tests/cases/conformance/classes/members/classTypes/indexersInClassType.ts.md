__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 123,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 32,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 24,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 24,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 31,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 31,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 37,
            "end": 57,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 38,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 56,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 62,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 62,
              "end": 63,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 69,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 82,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 75,
              "end": 78,
              "raw": "'a'",
              "value": "a",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 80,
                "end": 82,
                "members": []
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 121,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 90,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 121,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 115,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 110,
                      "end": 114
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 133,
            "end": 140,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 156,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 154,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 171,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 169,
              "end": 170,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 182,
            "end": 185,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
