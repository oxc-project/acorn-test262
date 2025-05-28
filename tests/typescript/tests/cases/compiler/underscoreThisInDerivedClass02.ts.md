__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 143,
  "end": 295,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 199,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 157,
            "end": 197,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 168,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 197,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 197,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 181,
                    "end": 191,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 188,
                      "end": 190,
                      "properties": []
                    }
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 295,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 208,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 219,
        "end": 295,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 293,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 236,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 236,
              "end": 293,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 239,
                "end": 293,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 249,
                    "end": 257,
                    "expression": {
                      "type": "CallExpression",
                      "start": 249,
                      "end": 256,
                      "callee": {
                        "type": "Super",
                        "start": 249,
                        "end": 254
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 266,
                    "end": 287,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 270,
                        "end": 286,
                        "id": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 275,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 278,
                          "end": 286,
                          "value": "uh-oh?",
                          "raw": "\"uh-oh?\""
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
