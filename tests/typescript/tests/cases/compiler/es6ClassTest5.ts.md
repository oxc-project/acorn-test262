__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 99,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "C1T5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 99,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 97,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 54,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 22,
                "end": 54,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 23,
                    "end": 32,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 24,
                      "end": 32,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 26,
                        "end": 32
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 43,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 37,
                        "end": 43
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  }
                }
              }
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 63,
              "end": 97,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 97,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 81,
                    "end": 90,
                    "argument": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 100,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 111,
        "decorators": [],
        "name": "C2T5",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 112,
        "end": 114,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 158,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 131,
        "decorators": [],
        "name": "bigClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 139,
            "end": 156,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 151,
              "decorators": [],
              "name": "break",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 154,
              "end": 155,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
