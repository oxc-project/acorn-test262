__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "MyBrand",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 30,
              "name": "_a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": "private"
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
      "start": 43,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 56,
        "name": "test",
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
          "start": 57,
          "end": 83,
          "name": "strInput",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 83,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 67,
              "end": 83,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 67,
                  "end": 73
                },
                {
                  "type": "TSTypeReference",
                  "start": 76,
                  "end": 83,
                  "typeName": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 83,
                    "name": "MyBrand",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 171,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 91,
            "end": 155,
            "discriminant": {
              "type": "Identifier",
              "start": 98,
              "end": 106,
              "name": "strInput",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 122,
                "end": 149,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 140,
                    "end": 149,
                    "argument": {
                      "type": "Literal",
                      "start": 147,
                      "end": 148,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 127,
                  "end": 130,
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 160,
            "end": 169,
            "argument": {
              "type": "Literal",
              "start": 167,
              "end": 168,
              "value": 0,
              "raw": "0"
            }
          }
        ]
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
