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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
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
            "callee": {
              "type": "Identifier",
              "start": 31,
              "end": 37,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "ignoreExtraVariables",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "CtorT",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 156,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 182,
                  "decorators": [],
                  "name": "CtorT",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                "decorators": [],
                "id": null,
                "typeParameters": null,
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
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 216,
                  "end": 297,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 226,
                      "end": 258,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 249,
                        "decorators": [],
                        "name": "IGNORE_EXTRA_VARIABLES",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 253,
                        "end": 257,
                        "value": true,
                        "raw": "true"
                      },
                      "computed": true,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
