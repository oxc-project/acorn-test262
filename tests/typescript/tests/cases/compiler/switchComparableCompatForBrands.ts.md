__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "MyBrand",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 39,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 30,
              "decorators": [],
              "name": "_a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 56,
        "decorators": [],
        "name": "test",
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
          "start": 57,
          "end": 83,
          "decorators": [],
          "name": "strInput",
          "optional": false,
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
                    "decorators": [],
                    "name": "MyBrand",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
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
              "decorators": [],
              "name": "strInput",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 122,
                "end": 149,
                "test": {
                  "type": "Literal",
                  "start": 127,
                  "end": 130,
                  "value": "a",
                  "raw": "\"a\""
                },
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
                ]
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
