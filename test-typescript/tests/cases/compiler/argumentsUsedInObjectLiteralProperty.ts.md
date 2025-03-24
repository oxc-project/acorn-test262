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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 176,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 174,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 53,
              "name": "createSelectableViewModel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 174,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 72,
                  "name": "initialState",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 69,
                      "end": 72
                    }
                  },
                  "decorators": [],
                  "optional": true
                },
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 93,
                  "name": "selectedValue",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 139,
                            "name": "selectedValue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 141,
                            "end": 157,
                            "object": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 150,
                              "name": "arguments",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 151,
                              "end": 157,
                              "name": "length",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
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
            "accessibility": "public"
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
