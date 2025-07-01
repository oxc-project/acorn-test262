__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 33
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 46,
                          "end": 50
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_init",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 51,
                          "end": 56
                        },
                        "optional": false,
                        "computed": false,
                        "start": 46,
                        "end": 56
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 46,
                      "end": 58
                    },
                    "directive": null,
                    "start": 46,
                    "end": 59
                  }
                ],
                "start": 36,
                "end": 65
              },
              "expression": false,
              "start": 33,
              "end": 65
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 22,
            "end": 65
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_init",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 86,
                "end": 93
              },
              "expression": false,
              "start": 83,
              "end": 93
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 70,
            "end": 93
          }
        ],
        "start": 16,
        "end": 95
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 132
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 150
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 163,
                        "end": 168
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 163,
                      "end": 170
                    },
                    "directive": null,
                    "start": 163,
                    "end": 171
                  }
                ],
                "start": 153,
                "end": 177
              },
              "expression": false,
              "start": 150,
              "end": 177
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 139,
            "end": 177
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_init",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 195
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 198,
                "end": 205
              },
              "expression": false,
              "start": 195,
              "end": 205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 182,
            "end": 205
          }
        ],
        "start": 133,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "DerivedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 224
        },
        "typeArguments": null,
        "arguments": [],
        "start": 208,
        "end": 226
      },
      "directive": null,
      "start": 208,
      "end": 227
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 227
}
```
