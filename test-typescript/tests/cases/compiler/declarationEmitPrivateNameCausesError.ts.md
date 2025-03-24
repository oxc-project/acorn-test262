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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 28,
            "name": "IGNORE_EXTRA_VARIABLES",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 31,
            "end": 39,
            "callee": {
              "type": "Identifier",
              "start": 31,
              "end": 37,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 300,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 100,
        "end": 300,
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 129,
          "name": "ignoreExtraVariables",
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
            "start": 170,
            "end": 182,
            "name": "ctor",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 182,
                  "name": "CtorT",
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
                "id": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 215,
                  "name": "ctor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 216,
                  "end": 297,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 226,
                      "end": 258,
                      "static": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 249,
                        "name": "IGNORE_EXTRA_VARIABLES",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 253,
                        "end": 257,
                        "value": true,
                        "raw": "true"
                      },
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": null,
                      "accessibility": null
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 129,
          "end": 168,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 130,
              "end": 167,
              "name": {
                "type": "Identifier",
                "start": 130,
                "end": 135,
                "name": "CtorT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeLiteral",
                "start": 144,
                "end": 167,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 145,
                    "end": 166,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 149,
                        "end": 162,
                        "argument": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 156,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    }
                  }
                ]
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
