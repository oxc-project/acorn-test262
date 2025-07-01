__ESTREE_TEST__:PASS:
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12,
                            "end": 13
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12,
                          "end": 13
                        }
                      ],
                      "start": 11,
                      "end": 14
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 17,
                              "end": 18
                            },
                            "typeArguments": null,
                            "start": 17,
                            "end": 18
                          },
                          "start": 16,
                          "end": 18
                        },
                        "start": 15,
                        "end": 18
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 21,
                          "end": 22
                        },
                        "typeArguments": null,
                        "start": 21,
                        "end": 22
                      },
                      "start": 19,
                      "end": 22
                    },
                    "start": 11,
                    "end": 23
                  }
                ],
                "start": 8,
                "end": 25
              },
              "start": 6,
              "end": 25
            },
            "start": 4,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 39,
                            "end": 40
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 39,
                          "end": 40
                        }
                      ],
                      "start": 38,
                      "end": 41
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 46,
                            "end": 47
                          },
                          "typeArguments": null,
                          "start": 46,
                          "end": 47
                        },
                        "start": 46,
                        "end": 49
                      },
                      "start": 44,
                      "end": 49
                    },
                    "start": 38,
                    "end": 50
                  }
                ],
                "start": 35,
                "end": 52
              },
              "start": 33,
              "end": 52
            },
            "start": 31,
            "end": 52
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 61,
              "end": 63
            },
            "id": null,
            "generator": false,
            "start": 55,
            "end": 63
          },
          "definite": false,
          "start": 31,
          "end": 63
        }
      ],
      "declare": false,
      "start": 27,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 67
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 71
        },
        "start": 66,
        "end": 71
      },
      "directive": null,
      "start": 66,
      "end": 72
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 82
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "str",
                    "raw": "\"str\"",
                    "start": 83,
                    "end": 88
                  }
                ],
                "optional": false,
                "start": 81,
                "end": 89
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toUpperCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 101
              },
              "optional": false,
              "computed": false,
              "start": 81,
              "end": 101
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 81,
            "end": 103
          },
          "definite": false,
          "start": 77,
          "end": 103
        }
      ],
      "declare": false,
      "start": 73,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 117
          },
          "optional": false,
          "computed": false,
          "start": 106,
          "end": 117
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          }
        ],
        "optional": false,
        "start": 106,
        "end": 120
      },
      "directive": null,
      "start": 106,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
