__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 38,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 37,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 32,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 32,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 37,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 53,
            "name": "_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 64,
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 87,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 86,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 66,
          "end": 79,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 78,
            "name": "_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 82,
          "end": 86,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 100,
            "name": "strMem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 115,
            "value": "strMemName",
            "raw": "\"strMemName\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 136,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 117,
          "end": 128,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "name": "strMem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 131,
          "end": 135,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 153,
            "name": "dashStrMem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 156,
            "end": 172,
            "value": "dashed-str-mem",
            "raw": "\"dashed-str-mem\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 197,
      "expression": {
        "type": "AssignmentExpression",
        "start": 174,
        "end": 196,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 174,
          "end": 189,
          "object": {
            "type": "Identifier",
            "start": 174,
            "end": 177,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 188,
            "name": "dashStrMem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 192,
          "end": 196,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 210,
            "name": "numMem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 213,
            "end": 215,
            "value": 42,
            "raw": "42"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 236,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 235,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 217,
          "end": 228,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 221,
            "end": 227,
            "name": "numMem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 231,
          "end": 235,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 253,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 253,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 247,
                "end": 253
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 256,
            "end": 269,
            "object": {
              "type": "Identifier",
              "start": 256,
              "end": 259,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 260,
              "end": 268,
              "name": "_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 286,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 289,
            "end": 300,
            "object": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 293,
              "end": 299,
              "name": "strMem",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 317,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 317,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 320,
            "end": 331,
            "object": {
              "type": "Identifier",
              "start": 320,
              "end": 323,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 324,
              "end": 330,
              "name": "numMem",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 348,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 348,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 351,
            "end": 366,
            "object": {
              "type": "Identifier",
              "start": 351,
              "end": 354,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 355,
              "end": 365,
              "name": "dashStrMem",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
