__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 176,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 176,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 174,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 53,
              "decorators": [],
              "name": "createSelectableViewModel",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 174,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 72,
                  "decorators": [],
                  "name": "initialState",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 69,
                      "end": 72
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 93,
                  "decorators": [],
                  "name": "selectedValue",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 174,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 105,
                    "end": 168,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 112,
                      "end": 167,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 126,
                          "end": 157,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 139,
                            "decorators": [],
                            "name": "selectedValue",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 141,
                            "end": 157,
                            "object": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 150,
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 151,
                              "end": 157,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
