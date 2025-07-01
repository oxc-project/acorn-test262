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
        "name": "C1T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 26,
                        "end": 32
                      },
                      "start": 24,
                      "end": 32
                    },
                    "start": 23,
                    "end": 32
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 37,
                        "end": 43
                      },
                      "start": 35,
                      "end": 43
                    },
                    "start": 34,
                    "end": 43
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  },
                  "start": 45,
                  "end": 54
                },
                "start": 22,
                "end": 54
              },
              "start": 20,
              "end": 54
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 65
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 89
                    },
                    "start": 81,
                    "end": 90
                  }
                ],
                "start": 70,
                "end": 97
              },
              "id": null,
              "generator": false,
              "start": 63,
              "end": 97
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 97
          }
        ],
        "start": 11,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 111
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 112,
        "end": 114
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 100,
      "end": 114
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bigClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 131
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "break",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 151
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 154,
              "end": 155
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 139,
            "end": 156
          }
        ],
        "start": 132,
        "end": 158
      },
      "abstract": false,
      "declare": false,
      "start": 116,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
