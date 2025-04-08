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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 54,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 52,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 42,
              "name": "field1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UnaryExpression",
              "start": 49,
              "end": 51,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 50,
                "end": 51,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 14,
                "end": 24,
                "expression": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 24,
                  "name": "decorator",
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
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 45,
                    "end": 46,
                    "value": 1,
                    "raw": "1"
                  }
                }
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 73,
        "name": "decorator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 85,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 85,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 82,
              "end": 85
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 97,
          "name": "field",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 97,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 94,
              "end": 97
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 101,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
