computedPropertyNames35_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 31,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 20,
            "end": 29,
            "argument": {
              "type": "Literal",
              "start": 27,
              "end": 29,
              "raw": "''",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 47,
        "end": 93,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 53,
            "end": 67,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 72,
            "end": 91,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 73,
              "end": 81,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 73,
                "end": 76,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 76,
                "end": 79,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 77,
                    "end": 78,
                    "typeName": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 90,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 86,
                "end": 90
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
