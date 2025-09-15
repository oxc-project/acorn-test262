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
        "start": 110,
        "end": 114
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 115,
        "end": 117
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 100,
      "end": 117
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
        "start": 126,
        "end": 134
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
              "start": 149,
              "end": 154
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 157,
              "end": 158
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 142,
            "end": 159
          }
        ],
        "start": 135,
        "end": 161
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 161
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
