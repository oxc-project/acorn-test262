__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "dec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 70,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 70,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 25,
              "end": 41,
              "name": "target",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 33,
                  "end": 41,
                  "typeName": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 41,
                    "name": "Function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 43,
              "end": 61,
              "name": "paramIndex",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 55,
                  "end": 61
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 70,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 66,
              "end": 70
            }
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 91,
        "body": []
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 73,
          "end": 79,
          "expression": {
            "type": "CallExpression",
            "start": 74,
            "end": 79,
            "callee": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
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
