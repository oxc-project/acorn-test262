__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 145,
  "end": 302,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 213,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 213,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 171,
            "end": 197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 175,
                "end": 196,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 192,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 178,
                      "end": 192,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 180,
                          "end": 190,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 182,
                            "end": 190,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 202,
            "end": 211,
            "argument": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 159,
          "end": 163,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 163,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 155,
        "end": 158,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 156,
            "end": 157,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 223,
            "end": 245,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 225,
                "end": 244,
                "properties": [
                  {
                    "type": "Property",
                    "start": 227,
                    "end": 242,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 228,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 230,
                      "end": 242,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 240,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 253,
      "end": 274,
      "directive": null,
      "expression": {
        "type": "LogicalExpression",
        "start": 253,
        "end": 273,
        "operator": "&&",
        "left": {
          "type": "MemberExpression",
          "start": 253,
          "end": 256,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 260,
          "end": 273,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 260,
            "end": 271,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 260,
              "end": 263,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 264,
              "end": 271,
              "decorators": [],
              "name": "toFixed",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
