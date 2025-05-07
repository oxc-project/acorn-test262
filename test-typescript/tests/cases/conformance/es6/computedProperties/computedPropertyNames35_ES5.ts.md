__ESTREE_TEST__:PASS:
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
              "value": "",
              "regex": null,
              "bigint": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
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
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 72,
            "end": 91,
            "accessibility": null,
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
                "optional": false,
                "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "static": false,
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
