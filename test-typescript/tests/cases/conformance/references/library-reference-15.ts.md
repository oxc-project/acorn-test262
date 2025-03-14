/a/types/jquery/index.d.ts
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 30,
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 20,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
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
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
/a/types/jquery2/index.d.ts
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 31,
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 21,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
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
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
/a/b/consumer.ts
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
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 5,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 1,
            "decorators": [],
            "name": "$",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2,
            "end": 5,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 31,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 30,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 28,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "decorators": [],
            "name": "$2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
