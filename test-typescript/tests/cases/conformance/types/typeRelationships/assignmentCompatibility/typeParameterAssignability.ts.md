__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 185,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 185,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 142,
        "end": 185,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 148,
            "end": 154,
            "expression": {
              "type": "AssignmentExpression",
              "start": 148,
              "end": 153,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "u",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 168,
            "end": 174,
            "expression": {
              "type": "AssignmentExpression",
              "start": 168,
              "end": 173,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 168,
                "end": 169,
                "decorators": [],
                "name": "u",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "t",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 130,
          "end": 134,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 131,
            "end": 134,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 133,
              "end": 134,
              "typeName": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 136,
          "end": 140,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 129,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 128,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
