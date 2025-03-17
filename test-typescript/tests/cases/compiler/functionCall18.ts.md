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
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "name": "foo",
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
          "start": 45,
          "end": 49,
          "name": "a",
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
                "name": "T",
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
          "start": 51,
          "end": 55,
          "name": "b",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 58,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "name": "foo",
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
          "start": 79,
          "end": 84,
          "name": "a",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 108,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 107,
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 99,
            "end": 106,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
