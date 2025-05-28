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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 54,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 52,
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
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 42,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "start": 45,
                    "end": 46,
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
                }
              }
            },
            "value": {
              "type": "UnaryExpression",
              "start": 49,
              "end": 51,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 50,
                "end": 51,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 73,
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 101,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
