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
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 159,
          "end": 163,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 163,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 192,
                  "name": "b",
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
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 182,
                            "end": 190,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 202,
            "end": 211,
            "argument": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 155,
        "end": 158,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 156,
            "end": 157,
            "name": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 223,
            "end": 245,
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 228,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 230,
                      "end": 242,
                      "callee": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 240,
                        "name": "Object",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 274,
      "expression": {
        "type": "LogicalExpression",
        "start": 253,
        "end": 273,
        "left": {
          "type": "MemberExpression",
          "start": 253,
          "end": 256,
          "object": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "start": 260,
          "end": 273,
          "callee": {
            "type": "MemberExpression",
            "start": 260,
            "end": 271,
            "object": {
              "type": "MemberExpression",
              "start": 260,
              "end": 263,
              "object": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 264,
              "end": 271,
              "name": "toFixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
