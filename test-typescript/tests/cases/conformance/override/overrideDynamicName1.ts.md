__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 11,
            "end": 16,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 45,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 40,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 45,
                "body": []
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
        "start": 24,
        "end": 29,
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 104,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 102,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 102,
                "body": []
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
        "start": 55,
        "end": 63,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 72,
        "end": 77,
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 135,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 135,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 133,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 133,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 133,
                "body": []
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
        "start": 112,
        "end": 117,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 137,
      "end": 183,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 183,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 170,
            "end": 181,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 175,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 181,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 179,
                "end": 181,
                "body": []
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
        "start": 143,
        "end": 151,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 160,
        "end": 165,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 185,
      "end": 199,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 197,
        "end": 199,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 196,
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 256,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 230,
        "end": 256,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 234,
            "end": 254,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 248,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 249,
              "end": 254,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 252,
                "end": 254,
                "body": []
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
        "start": 207,
        "end": 215,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 229,
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
