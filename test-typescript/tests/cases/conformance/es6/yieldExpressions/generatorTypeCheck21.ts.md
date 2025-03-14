generatorTypeCheck21.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
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
      "end": 59,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 57,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
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
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 132,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 132,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 109,
            "expression": {
              "type": "YieldExpression",
              "start": 103,
              "end": 108,
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 130,
            "expression": {
              "type": "YieldExpression",
              "start": 114,
              "end": 129,
              "argument": {
                "type": "NewExpression",
                "start": 122,
                "end": 129,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 129,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 96,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 75,
          "end": 96,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 91,
            "end": 96,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 92,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 95,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 75,
            "end": 91,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
