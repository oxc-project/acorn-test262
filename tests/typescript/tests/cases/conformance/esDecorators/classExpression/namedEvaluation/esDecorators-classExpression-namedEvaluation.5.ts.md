__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              },
              "start": 25,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 22,
          "end": 30
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              },
              "start": 33,
              "end": 38
            },
            "start": 32,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 32,
          "end": 38
        }
      ],
      "declare": true,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 171
                      },
                      "start": 167,
                      "end": 171
                    }
                  ],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 178,
                    "end": 181
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 167,
                  "end": 181
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 181
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 163,
              "end": 181
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 183
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 189
        },
        "start": 161,
        "end": 189
      },
      "directive": null,
      "start": 160,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 196
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [
                          {
                            "type": "Decorator",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 208,
                              "end": 211
                            },
                            "start": 207,
                            "end": 211
                          }
                        ],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 213
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 215,
                            "end": 218
                          },
                          "start": 213,
                          "end": 218
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 207,
                        "end": 219
                      }
                    ],
                    "start": 205,
                    "end": 221
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 199,
                  "end": 221
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 221
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 195,
              "end": 221
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 223
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 229
        },
        "start": 193,
        "end": 229
      },
      "directive": null,
      "start": 192,
      "end": 231
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 231
}
```
