__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 99,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 99,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 97,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 54,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 22,
                "end": 54,
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
              "async": false,
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
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "C1T5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 100,
      "end": 114,
      "body": {
        "type": "TSModuleBlock",
        "start": 112,
        "end": 114,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 111,
        "decorators": [],
        "name": "C2T5",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 139,
            "end": 156,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 151,
              "decorators": [],
              "name": "break",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 154,
              "end": 155,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 131,
        "decorators": [],
        "name": "bigClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
