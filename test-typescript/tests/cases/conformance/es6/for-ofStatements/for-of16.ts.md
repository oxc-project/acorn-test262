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
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "name": "MyStringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 93,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 61,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 110,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 104,
                "end": 110
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
      "type": "ForOfStatement",
      "start": 112,
      "end": 147,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 122,
        "end": 142,
        "callee": {
          "type": "Identifier",
          "start": 126,
          "end": 142,
          "name": "MyStringIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 147,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 164,
      "end": 199,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 169,
        "end": 170,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 174,
        "end": 194,
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 194,
          "name": "MyStringIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 199,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
