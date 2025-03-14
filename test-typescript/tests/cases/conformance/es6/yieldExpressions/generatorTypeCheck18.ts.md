__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 21,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 47,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 45,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
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
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 118,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 118,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 91,
            "end": 97,
            "expression": {
              "type": "YieldExpression",
              "start": 91,
              "end": 96,
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 102,
            "end": 116,
            "expression": {
              "type": "YieldExpression",
              "start": 102,
              "end": 115,
              "argument": {
                "type": "NewExpression",
                "start": 108,
                "end": 115,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 115,
                  "decorators": [],
                  "name": "Baz",
                  "optional": false
                }
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 84,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 63,
          "end": 84,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 79,
            "end": 84,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 80,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 83,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 63,
            "end": 79,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
