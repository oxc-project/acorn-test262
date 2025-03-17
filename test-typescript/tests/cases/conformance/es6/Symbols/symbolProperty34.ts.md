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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 82,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 27,
              "end": 45,
              "object": {
                "type": "Identifier",
                "start": 27,
                "end": 33,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 34,
                "end": 45,
                "name": "toStringTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 82,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 68,
                            "end": 69,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 71,
                            "end": 73,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 135,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 100,
            "end": 133,
            "parameters": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 110,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 104,
                    "end": 110
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 132,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 113,
                "end": 132,
                "typeParameters": null,
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 122,
                          "end": 130,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 124,
                            "end": 130
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
