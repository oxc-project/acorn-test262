__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 63,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 63,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "PropDeco",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 32,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 26,
              "end": 32,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 32,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 34,
          "end": 58,
          "decorators": [],
          "name": "propKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 58,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 43,
              "end": 58,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 52,
                  "end": 58
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 123,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 121,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 81,
                "end": 90,
                "expression": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 90,
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 120,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 107,
                "end": 120,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 107,
                    "end": 112,
                    "literal": {
                      "type": "Literal",
                      "start": 107,
                      "end": 112,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 115,
                    "end": 120,
                    "literal": {
                      "type": "Literal",
                      "start": 115,
                      "end": 120,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 74,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
