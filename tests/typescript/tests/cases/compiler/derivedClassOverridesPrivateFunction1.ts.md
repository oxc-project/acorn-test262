__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 95,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 65,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 65,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 46,
                    "end": 59,
                    "expression": {
                      "type": "CallExpression",
                      "start": 46,
                      "end": 58,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 46,
                        "end": 56,
                        "object": {
                          "type": "ThisExpression",
                          "start": 46,
                          "end": 50
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 56,
                          "decorators": [],
                          "name": "_init",
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
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 93,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "_init",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 93,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 93,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 207,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 114,
        "decorators": [],
        "name": "DerivedClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 132,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 177,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 150,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 177,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 177,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 171,
                    "expression": {
                      "type": "CallExpression",
                      "start": 163,
                      "end": 170,
                      "callee": {
                        "type": "Super",
                        "start": 163,
                        "end": 168
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 205,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 195,
              "decorators": [],
              "name": "_init",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 205,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 205,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 227,
      "expression": {
        "type": "NewExpression",
        "start": 208,
        "end": 226,
        "callee": {
          "type": "Identifier",
          "start": 212,
          "end": 224,
          "decorators": [],
          "name": "DerivedClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
