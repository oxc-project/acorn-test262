__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createSelectableViewModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 53
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialState",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 69,
                      "end": 72
                    },
                    "start": 67,
                    "end": 72
                  },
                  "start": 54,
                  "end": 72
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "selectedValue",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    },
                    "start": 88,
                    "end": 93
                  },
                  "start": 74,
                  "end": 93
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "selectedValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 126,
                            "end": 139
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 150
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 151,
                              "end": 157
                            },
                            "optional": false,
                            "computed": false,
                            "start": 141,
                            "end": 157
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 126,
                          "end": 157
                        }
                      ],
                      "start": 112,
                      "end": 167
                    },
                    "start": 105,
                    "end": 168
                  }
                ],
                "start": 95,
                "end": 174
              },
              "expression": false,
              "start": 53,
              "end": 174
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 14,
            "end": 174
          }
        ],
        "start": 8,
        "end": 176
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
