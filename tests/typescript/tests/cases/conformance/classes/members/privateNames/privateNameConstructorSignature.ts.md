__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 174,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 174,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 45,
              "end": 47,
              "name": "x"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 172,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 172,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 172,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 77,
                    "end": 93,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 77,
                      "end": 92,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 77,
                        "end": 87,
                        "object": {
                          "type": "NewExpression",
                          "start": 77,
                          "end": 84,
                          "callee": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 82,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 85,
                          "end": 87,
                          "name": "x"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 90,
                        "end": 92,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 102,
                    "end": 120,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 108,
                        "end": 119,
                        "id": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 109,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 112,
                          "end": 119,
                          "callee": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 117,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 129,
                    "end": 147,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 135,
                        "end": 146,
                        "id": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 136,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 139,
                          "end": 146,
                          "callee": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 144,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 166,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 156,
                      "end": 165,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 156,
                        "end": 159,
                        "object": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 159,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 162,
                        "end": 165,
                        "value": 123,
                        "raw": "123"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 175,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 186,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 187,
        "end": 205,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 193,
            "end": 203,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
