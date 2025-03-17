__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 48,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 13,
                "end": 20,
                "name": "obj",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 20,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 18,
                    "end": 20,
                    "members": []
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 22,
                "end": 34,
                "name": "prop",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 39,
              "end": 48,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 64,
            "end": 95,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 79,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 64,
                "end": 68,
                "expression": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 94,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 81,
                "end": 94,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 90,
                    "end": 94
                  }
                ]
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 98,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 98,
                "end": 102,
                "expression": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 102,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              }
            },
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
