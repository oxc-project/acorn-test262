__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 30,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 30,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 17,
                    "end": 28,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 20,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 22,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 24,
                        "end": 28
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 31,
            "decorators": [],
            "name": "$2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 16,
                "end": 31,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 18,
                    "end": 29,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 21,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 23,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 25,
                        "end": 29
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 8,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 7,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 5,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 1,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2,
            "end": 5,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 31,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 30,
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 28,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "decorators": [],
            "name": "$2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
