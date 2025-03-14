__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 109,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 21,
      "end": 57,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 49,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 51,
          "end": 55,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 55,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 55,
              "typeName": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 58,
      "end": 86,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 84,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 82,
              "end": 84,
              "members": []
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 108,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 107,
        "arguments": [
          {
            "type": "Literal",
            "start": 99,
            "end": 106,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 90,
          "end": 98,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 91,
              "end": 97
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
