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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Arg",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 29,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 17,
            "end": 27,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
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
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 114,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 38,
        "end": 114,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 48,
          "end": 114,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 54,
              "end": 112,
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
              "value": {
                "type": "FunctionExpression",
                "start": 65,
                "end": 112,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 66,
                    "end": 77,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 68,
                        "end": 69,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 74,
                        "end": 77,
                        "typeName": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 77,
                          "decorators": [],
                          "name": "Arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 115,
      "end": 169,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 122,
        "end": 169,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 141,
          "end": 169,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 147,
              "end": 167,
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
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 158,
                "end": 167,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 159,
                    "end": 165,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 161,
                        "end": 162,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 162,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 162,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
