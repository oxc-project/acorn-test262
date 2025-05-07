__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 54,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 52,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 14,
                "end": 24,
                "expression": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 24,
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 42,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 46,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 44,
                "end": 46,
                "literal": {
                  "type": "UnaryExpression",
                  "start": 44,
                  "end": 46,
                  "argument": {
                    "type": "Literal",
                    "start": 45,
                    "end": 46,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            },
            "value": {
              "type": "UnaryExpression",
              "start": 49,
              "end": 51,
              "argument": {
                "type": "Literal",
                "start": 50,
                "end": 51,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "operator": "-",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 101,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 73,
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 85,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 85,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 82,
              "end": 85
            }
          }
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 97,
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 97,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 94,
              "end": 97
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
