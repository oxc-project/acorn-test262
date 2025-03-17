__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 300,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 28,
            "decorators": [],
            "name": "IGNORE_EXTRA_VARIABLES",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 31,
            "end": 39,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 31,
              "end": 37,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 300,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 100,
        "end": 300,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 184,
          "end": 300,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 190,
              "end": 298,
              "argument": {
                "type": "ClassExpression",
                "start": 197,
                "end": 297,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 216,
                  "end": 297,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 226,
                      "end": 258,
                      "accessibility": null,
                      "computed": true,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 249,
                        "decorators": [],
                        "name": "IGNORE_EXTRA_VARIABLES",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 253,
                        "end": 257,
                        "raw": "true",
                        "value": true
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 215,
                  "decorators": [],
                  "name": "ctor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 129,
          "decorators": [],
          "name": "ignoreExtraVariables",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 170,
            "end": 182,
            "decorators": [],
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 182,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 182,
                  "decorators": [],
                  "name": "CtorT",
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
          "start": 129,
          "end": 168,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 130,
              "end": 167,
              "const": false,
              "constraint": {
                "type": "TSTypeLiteral",
                "start": 144,
                "end": 167,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 145,
                    "end": 166,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 149,
                        "end": 162,
                        "argument": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 156,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 156,
                          "end": 162,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 157,
                            "end": 162,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 157,
                              "end": 160
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 166,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 164,
                        "end": 166,
                        "members": []
                      }
                    },
                    "typeParameters": null
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 130,
                "end": 135,
                "decorators": [],
                "name": "CtorT",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
