__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 80,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 59,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 59,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 44,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 41,
                      "end": 44
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 59,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 48,
                    "end": 57,
                    "argument": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          {
            "type": "PropertyDefinition",
            "start": 64,
            "end": 78,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 76,
              "end": 77,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 19,
          "end": 20,
          "expression": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 102,
          "end": 103,
          "expression": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 131,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 110,
            "end": 129,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 115,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 116,
                "end": 122,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 117,
                  "end": 122,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 119,
                    "end": 122
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 128,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 125,
                "end": 128
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
