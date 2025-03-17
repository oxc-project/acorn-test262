__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 22,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 20,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 42,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 42,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 30,
                "end": 42,
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 30,
                    "end": 36
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 39,
                    "end": 42,
                    "typeName": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 42,
                      "name": "Foo",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 47,
      "expression": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 48,
      "end": 101,
      "test": {
        "type": "BinaryExpression",
        "start": 52,
        "end": 73,
        "left": {
          "type": "UnaryExpression",
          "start": 52,
          "end": 60,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 65,
          "end": 73,
          "value": "symbol",
          "raw": "\"symbol\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 75,
        "end": 85,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 81,
            "end": 83,
            "expression": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 91,
        "end": 101,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 97,
            "end": 99,
            "expression": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
