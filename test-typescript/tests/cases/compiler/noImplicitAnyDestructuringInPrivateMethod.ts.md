__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 30,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Arg",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 29,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 17,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 114,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 38,
        "end": 114,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 48,
          "end": 114,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 54,
              "end": 112,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 65,
                "end": 112,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 87,
                  "end": 112,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 97,
                      "end": 106,
                      "argument": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 105,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                    "type": "ObjectPattern",
                    "start": 66,
                    "end": 77,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 68,
                        "end": 69,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 74,
                        "end": 77,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 77,
                          "decorators": [],
                          "name": "Arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 47,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 115,
      "end": 169,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 122,
        "end": 169,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 141,
          "end": 169,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 147,
              "end": 167,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 158,
                "end": 167,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 159,
                    "end": 165,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 161,
                        "end": 162,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 162,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 162,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 136,
          "end": 140,
          "decorators": [],
          "name": "Bar2",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
