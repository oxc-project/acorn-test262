__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 84,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 82,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 27,
              "end": 45,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 27,
                "end": 33,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 34,
                "end": 45,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 82,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 82,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 59,
                    "end": 76,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 66,
                      "end": 75,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 68,
                          "end": 73,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 68,
                            "end": 69,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 71,
                            "end": 73,
                            "raw": "\"\"",
                            "value": "",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
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
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 135,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 135,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 100,
            "end": 133,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 110,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 104,
                    "end": 110
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 132,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 113,
                "end": 132,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 116,
                  "end": 132,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 119,
                    "end": 132,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 121,
                        "end": 130,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 122,
                          "end": 130,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 124,
                            "end": 130
                          }
                        }
                      }
                    ]
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
