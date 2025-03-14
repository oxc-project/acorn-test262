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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 70,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 70,
          "params": [
            {
              "type": "Identifier",
              "start": 25,
              "end": 41,
              "decorators": [],
              "name": "target",
              "optional": false,
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
                    "decorators": [],
                    "name": "Function",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 43,
              "end": 61,
              "decorators": [],
              "name": "paramIndex",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 55,
                  "end": 61
                }
              }
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 91,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 73,
          "end": 79,
          "expression": {
            "type": "CallExpression",
            "start": 74,
            "end": 79,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "decorators": [],
              "name": "dec",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "C",
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
