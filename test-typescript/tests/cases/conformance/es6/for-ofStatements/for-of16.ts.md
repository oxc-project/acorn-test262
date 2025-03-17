__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 287,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 93,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 61,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 93,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 87,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 82,
                      "end": 86
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 110,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 104,
                "end": 110
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 112,
      "end": 147,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 147,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 122,
        "end": 142,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 126,
          "end": 142,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 164,
      "end": 199,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 199,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 169,
        "end": 170,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 174,
        "end": 194,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 194,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
